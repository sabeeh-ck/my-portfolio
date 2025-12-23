import { Fragment } from 'react'

export default function Contact() {
    const socials = [
        {
            name: 'Email',
            url: 'mailto:sabeehck02@gmail.com',
            value: 'sabeehck02@gmail.com',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/sabeeh-ck',
            value: '@sabeeh-ck',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/muhammedsabeehck/',
            value: '@muhammedsabeehck',
        },
    ]

    return (
        <section id="contact">
            <h2 className="mb-4">Connect</h2>
            <dl className="grid grid-cols-[3fr_7fr] gap-y-3">
                {socials.map((social) => (
                    <Fragment key={social.name}>
                        <dt className="font-bold">{social.name}</dt>
                        <dd className="text-textmute text-sm font-semibold md:text-base">
                            <a href={social.url} className="hover:underline">
                                {social.value}
                            </a>
                        </dd>
                    </Fragment>
                ))}
            </dl>
        </section>
    )
}
