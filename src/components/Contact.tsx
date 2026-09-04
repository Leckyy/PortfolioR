export const Contact = () => {
  return (
    <section id="contact" className="scroll-reveal bg-midnight px-6 py-20 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 font-mono text-sm text-mint">Échangeons</p>
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Contact</h2>
        <p className="mx-auto mb-8 max-w-xl leading-7 text-slate-300">
          Vous souhaitez échanger au sujet d&apos;une opportunité d&apos;alternance ? Je
          serai heureux de vous répondre.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tristan.auriat.job@gmail.com"
            rel="noreferrer"
            onClick={(event) => {
              const composeWindow = window.open(
                event.currentTarget.href,
                "gmail-compose",
                "width=900,height=700,resizable=yes,scrollbars=yes",
              )

              if (composeWindow) {
                event.preventDefault()
              }
            }}
            className="project-button rounded-md px-5 py-3 text-sm font-semibold"
          >
            M&apos;écrire par email
          </a>
          <a
            href="https://www.linkedin.com/in/tristan-auriat-271834307/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-mint px-5 py-3 text-sm font-semibold text-mint transition-colors hover:bg-mint hover:text-midnight"
          >
            Voir mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}