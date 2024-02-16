import { NextSeo } from 'next-seo';
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import  siteMeta from '@/data/siteMeta'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
    <NextSeo
      title="Activities - Baker Lawzi"
      description={siteMeta.description}
      canonical="https://brian.dev/speaking"
      openGraph={{
        url: 'https://brian.dev/speaking',
        images: [
          {
            url: `https://og.brian.dev/api/og?title=Speaking&desc=I’ve spoken at events all around the world and been interviewed for many podcasts.`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: '',
      }}
    />
      <SimpleLayout
        title="I’ve Participated  at events and Organised a Lot of Events as The Leader of Google Developer Students Club and Microsoft Student Ambassador"
        intro="One of my favorite ways to share my ideas is live on stage,Also to Help the Community to Learn , I try to give them Opportunity to Learn and fill The gap between the real world and the World of Theory at the University"
      >
        <div className="space-y-20">
          <SpeakingSection title="Events">
          <Appearance
              title="DevFest 2023"
              description="I Was a part of one of the biggest event in the whole mena"
              event="Balamand University 2023"
            />
            <Appearance
              title="Hack the Code(Devathon)"
              description="I was a part of this hackathon where 100 students were fighting to solve 8 algorithmic question "
              event="Balamand University 2024"
            />

          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
