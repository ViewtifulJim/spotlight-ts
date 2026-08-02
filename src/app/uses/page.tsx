import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'The hardware, software, and tools I use every day.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="The hardware, software, and tools I use every day."
      intro="People often ask what I use for software development, studying, and everyday work. My setup is a mix of Apple hardware for development, a powerful Windows desktop for gaming, and a collection of tools that help me stay productive while building web applications and Java projects. I believe good tools don't make great developers, but they can make the process far more enjoyable. These are the ones I find myself reaching for every day."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="MacBook Air M4, 24GB RAM">
            My primary development machine. It's incredibly quiet, the battery
            easily lasts all day, and it handles everything from React projects
            to Java development without breaking a sweat.
          </Tool>

          <Tool title='Samsung Odyssey OLED G81SF 32" 4K 240Hz'>
            My main monitor at home. The 4K OLED display is fantastic for
            development, and the 240Hz refresh rate makes everything feel
            incredibly smooth.
          </Tool>

          <Tool title="Custom Windows Gaming PC">
            Powered by a Ryzen 7 9800X3D, RTX 5070 Ti and 32GB RAM. I mainly use
            it for gaming, but it's always there whenever I need some extra
            horsepower.
          </Tool>

          <Tool title="Logitech MX Keys Mini">
            Comfortable, compact and one of the nicest keyboards I've used.
            Perfect for switching between my MacBook and desktop.
          </Tool>

          <Tool title="Logitech MX Master 3S">
            Easily my favourite productivity mouse. The ergonomic design and
            customisable buttons make long development sessions much more
            comfortable.
          </Tool>

          <Tool title="Secretlab Titan Evo Chair">
            When you spend most of your day behind a desk, a comfortable chair
            is worth every penny.
          </Tool>

          <Tool title="IKEA Desk Setup">
            A simple, clean desk built from IKEA units that gives me plenty of
            room for both development and gaming.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Development">
          <Tool title="Visual Studio Code">
            My go-to editor for TypeScript, React and Next.js development. Fast,
            lightweight and endlessly customisable.
          </Tool>

          <Tool title="IntelliJ IDEA">
            My preferred IDE whenever I'm working with Java. The tooling and
            intelligent code assistance make development a pleasure.
          </Tool>

          <Tool title="iTerm2 & Oh My Zsh">
            My terminal setup on macOS. It looks great, feels fast and makes
            working in the terminal much more enjoyable.
          </Tool>

          <Tool title="Homebrew">
            Essential on macOS. It makes installing and managing development
            tools effortless.
          </Tool>

          <Tool title="Git & GitHub">
            Every project starts with Git. Whether it's personal projects or
            work, version control is something I use every single day.
          </Tool>

        </ToolsSection>

        <ToolsSection title="Design">
          <Tool title="Figma">
            I'm still learning my way around Figma, but it's become my preferred
            tool for wireframing layouts and planning interfaces before jumping
            into code.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            One of my favourite macOS utilities. It replaces Spotlight and makes
            launching applications, searching files and running commands almost
            instant.
          </Tool>

          <Tool title="Apple Calendar">
            I keep everything organised here, from work meetings and personal
            appointments to project deadlines.
          </Tool>

          <Tool title="Apple Notes">
            My digital notebook for ideas, snippets, checklists and anything I
            don't want to forget.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Everyday Carry">
          <Tool title="iPhone 16 Pro Max">
            My daily phone and the centre of my Apple ecosystem. Everything just
            syncs seamlessly.
          </Tool>

          <Tool title="AirPods Pro">
            Whether I'm coding, travelling or out for a walk, these are almost
            always with me. The noise cancellation is excellent.
          </Tool>

          <Tool title="Kindle">
            A great way to disconnect from a screen in the evenings while still
            learning something new or enjoying a good book.
          </Tool>

          <Tool title="Garmin Epix Pro (Gen 2)">
            I use it to track runs, hikes, workouts and everyday activity. It's
            become an essential part of keeping my fitness on track.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}