import Image from 'next/image'
// import WhatsappIcon from '../public/images/whatsapp-svgrepo-com.svg'
// import EmailIcon from '../public/images/email-svgrepo-com.svg'
import Icon from '../public/images/icon.svg'

export default function DaiIcon(props: { width: number; height: number }) {
  return (
    <Image
      src={Icon}
      width={props.width}
      height={props.height}
      alt="Dai Icon"
    />
  )
}
