'use client'
import React, { useEffect } from 'react'

export default function TikTokFeed() {
  useEffect(() => {
    const scriptId = 'tiktok-embed-script'

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.async = true
      script.src = 'https://www.tiktok.com/embed.js'
      document.body.appendChild(script)
    } else {
      // Re-process the embed if script already loaded
      if ((window ).tiktokEmbedLoad) {
        (window ).tiktokEmbedLoad()
      }
    }
  }, [])

  return (
    <div className="flex justify-center items-center bg-white">
      <div style={{ maxWidth: '780px', minWidth: '288px', width: '100%' }}>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@minjavarsakovicc"
          data-unique-id="minjavarsakovicc"
          data-embed-type="creator"
          style={{
            maxWidth: '780px',
            minWidth: '288px',
            margin: '0 auto',
          }}
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@minjavarsakovicc?refer=creator_embed"
              rel="noopener noreferrer"
            >
              @minjavarsakovicc
            </a>
          </section>
        </blockquote>
      </div>
    </div>
  )
}
