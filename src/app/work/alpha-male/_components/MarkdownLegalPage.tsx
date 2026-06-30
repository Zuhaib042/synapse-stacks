import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import styles from '@/app/legal.module.css'
import markdownStyles from './MarkdownLegalPage.module.css'

interface MarkdownLegalPageProps {
  eyebrow: string
  markdownPath: string
}

type Block =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

type HeadingBlock = Extract<Block, { type: 'heading' }>
type ParagraphBlock = Extract<Block, { type: 'paragraph' }>

function parseMarkdown(markdown: string): Block[] {
  const blocks: Block[] = []
  const lines = markdown.split(/\r?\n/)
  let paragraph: string[] = []
  let listItems: string[] = []

  function flushParagraph() {
    if (paragraph.length) {
      blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
      paragraph = []
    }
  }

  function flushList() {
    if (listItems.length) {
      blocks.push({ type: 'list', items: listItems })
      listItems = []
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed) {
      flushParagraph()
      flushList()
      continue
    }

    if (trimmed.startsWith('### ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading', level: 3, text: trimmed.replace(/^### /, '') })
      continue
    }

    if (trimmed.startsWith('## ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading', level: 2, text: trimmed.replace(/^## /, '') })
      continue
    }

    if (trimmed.startsWith('# ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading', level: 1, text: trimmed.replace(/^# /, '') })
      continue
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph()
      listItems.push(trimmed.replace(/^- /, ''))
      continue
    }

    flushList()
    paragraph.push(trimmed.replace(/ {2}$/, ''))
  }

  flushParagraph()
  flushList()

  return blocks
}

function renderInline(text: string) {
  const parts = text.split(/(contact@synapsestacks\.com|https?:\/\/[^\s]+)/g)

  return parts.map((part, index) => {
    if (part === 'contact@synapsestacks.com') {
      return (
        <a key={`${part}-${index}`} href="mailto:contact@synapsestacks.com">
          {part}
        </a>
      )
    }

    if (/^https?:\/\//.test(part)) {
      return (
        <a key={`${part}-${index}`} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      )
    }

    return part
  })
}

export function MarkdownLegalPage({ eyebrow, markdownPath }: MarkdownLegalPageProps) {
  const markdown = readFileSync(join(process.cwd(), markdownPath), 'utf8')
  const blocks = parseMarkdown(markdown)
  const titleBlock = blocks.find(
    (block): block is HeadingBlock => block.type === 'heading' && block.level === 1
  )
  const effectiveDate = blocks.find(
    (block): block is ParagraphBlock =>
      block.type === 'paragraph' && block.text.startsWith('Effective date:')
  )
  const bodyBlocks = blocks.filter((block) => block !== titleBlock && block !== effectiveDate)

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{titleBlock?.text ?? 'Alpha Male Legal'}</h1>
        {effectiveDate && (
          <p className={styles.updated}>
            {effectiveDate.text.replace('Effective date:', 'Effective date:')}
          </p>
        )}

        <article className={markdownStyles.content}>
          {bodyBlocks.map((block, index) => {
            if (block.type === 'heading') {
              const Heading = block.level === 2 ? 'h2' : 'h3'

              return <Heading key={`${block.text}-${index}`}>{block.text}</Heading>
            }

            if (block.type === 'list') {
              return (
                <ul key={`list-${index}`}>
                  {block.items.map((item) => (
                    <li key={item}>{renderInline(item)}</li>
                  ))}
                </ul>
              )
            }

            return <p key={`${block.text}-${index}`}>{renderInline(block.text)}</p>
          })}
        </article>
      </div>
    </div>
  )
}
