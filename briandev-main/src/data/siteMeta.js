
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Baker Lawzi",
    description: "Baker is Data Scientist , Backend developer , speaker , and open source practitioner.",
    copyright: "Baker Lawzi",
    author: {
        name: "Baker Lawzi",
        email: "bakricoder71@gmail.com",
        twitter: "https://twitter.com/BakriLawzi",
        github: "https://github.com/bakrilawzi",
        linkedin: "https://www.linkedin.com/in/baker-lawzi",
        twitch: "https://twitch.tv/bketelsen",
        medium: "https://lawzibakri100.medium.com"
    },
    siteUrl: ""
}
 export const resume = [
//     {
//       company: 'Amazon',
//       title: 'Principal Developer Advocate',
//       logo: logoAmazon,
//       start: '2022',
//       end: {
//         label: 'Present',
//         dateTime: new Date().getFullYear(),
//       },
//     },
//     {
//       company: 'Microsoft',
//       title: 'Principal Cloud Developer Advocate',
//       logo: logoMicrosoft,
//       start: '2017',
//       end: '2022',
//     },
//     {
//       company: 'XOR Data Exchange',
//       title: 'CIO',
//       logo: logoXOR,
//       start: '2014',
//       end: '2016',
//     },
//     {
//       company: 'Clarity Services, Inc.',
//       title: 'COO',
//       logo: logoClarity,
//       start: '2008',
//       end: '2014',
//     },
  ]
export const projects = [
  {
    name: 'Clarity',
    description:
      'Helping deaf people to be able to communicate by using the azure cognitive services',
    link: { href: 'https://github.com/bakrilawzi/clarity', label: 'Clarity' },
    logo: logoFleek,
  },
  {
    name: 'Spotify songs generator',
    description:
      'Generates songs based on the mood of the user using facial recognition',
    link: { href: 'https://github.com/bakrilawzi/spotify-rest-api', label: 'Songs generator' },
    logo: logoUblue,
  },
]
  // {
  //   name: 'Bluefin',
  //   description:
  //     'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
  //   link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
  //   logo: logoUblue,
  // },
  // {
  //   name: 'Vanilla OS',
  //   description:
  //     'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
  //   link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
  //   logo: logoVanilla,
  // },
  // {
  //   name: 'Captain Hook',
  //   description:
  //     'Custom commands as webhooks.',
  //   link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
  //   logo: logoCaptainhook,
  // },
  // {
  //   name: 'Kubernetes',
  //   description:
  //     'Production-Grade Container Scheduling and Management',
  //   link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
  //   logo: logoKubernetes,
  // },
  // {
  //   name: 'Go',
  //   description:
  //     'Build fast, reliable, and efficient software at scale',
  //   link: { href: 'https://go.dev', label: 'go.dev' },
  //   logo: logoGolang,
  // },


export default siteMeta;