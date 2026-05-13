import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#7f04f9',
          borderRadius: 7,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 9l8.5 4.25L17 17.5 8.5 13.25z" fill="white" />
          <path
            d="M8.5 17.5l8.5 4.25 8.5-4.25"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M8.5 21.75l8.5 4.25 8.5-4.25"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    size
  )
}
