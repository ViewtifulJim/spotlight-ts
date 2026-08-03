import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  target,
  rel,
  'aria-label': ariaLabel,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  target?: string
  rel?: string
  'aria-label'?: string
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm James Williams, a Graduate Technology Engineer with a passion for building modern software, and exploring new technologies.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Turning ideas into software, one project at a time.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've always enjoyed building things and solving problems. What started as a
              curiosity about how software works quickly turned into a passion for creating
              applications of my own. I love the process of taking an idea from a blank
              screen to something real that people can interact with.
            </p>

            <p>
              I'm currently focused on expanding my skills in Java, TypeScript, React, and
              modern web technologies. Whether I'm building desktop applications or web
              projects, I'm always looking for opportunities to learn new tools, improve my
              code, and become a better developer.
            </p>

            <p>
              I enjoy writing clean, maintainable code and creating user experiences that
              are simple, intuitive, and enjoyable to use. For me, software development is
              about more than just making things work—it's about building products that are
              reliable, thoughtful, and well-designed.
            </p>

            <p>
              Outside of programming, I enjoy endurance sports, hiking, and spending time
              outdoors. I believe the same mindset that helps me improve in sport—staying
              consistent, embracing challenges, and always learning—is what drives me as a
              developer every day.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/ViewtifulJim"
                          target="_blank"
                          rel="noopener noreferrer" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/james-colin-williams/" target="_blank"
                          rel="noopener noreferrer"icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jamescolinwilliams@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jamescolinwilliams@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
