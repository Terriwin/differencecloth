import type { SVGProps } from "react";
import type { SocialKind } from "@/lib/types";

/**
 * Icon set. Two intentional families, separated by role:
 *  - UI controls  -> stroke icons (1.6px), inherit color via currentColor
 *  - Brand marks  -> filled glyphs, used only on the contacts/footer links
 * No emoji anywhere. All icons are aria-hidden by default; the surrounding
 * control carries the accessible label.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </Stroke>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Stroke>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Stroke>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M15 6l-6 6 6 6" />
    </Stroke>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M9 6l6 6-6 6" />
    </Stroke>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Stroke>
  );
}

/* ---- Brand glyphs (filled) ------------------------------------------------ */

function Brand({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <Brand {...props}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212-.07-.062-.174-.041-.249-.024-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </Brand>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <Brand {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.43-2.44V9.4a5.66 5.66 0 0 0-.84-.05A5.68 5.68 0 0 0 4.2 15a5.68 5.68 0 0 0 11.36 0V8.99a7.34 7.34 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.26-1.48z" />
    </Brand>
  );
}

export function VkIcon(props: IconProps) {
  return (
    <Brand {...props}>
      <path d="M12.785 16.241s.288-.032.435-.194c.135-.148.131-.427.131-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.267-.305-1.075-.305-1.649 0-1.793.267-2.541-.521-2.733-.262-.063-.454-.105-1.123-.112-.858-.009-1.585.003-1.996.207-.274.135-.485.437-.356.454.159.022.519.099.71.365.246.344.237 1.117.237 1.117s.142 2.103-.33 2.364c-.325.179-.77-.186-1.724-1.866-.489-.86-.858-1.812-.858-1.812s-.071-.176-.2-.27c-.156-.115-.374-.151-.374-.151l-2.286.015s-.343.01-.469.161c-.112.135-.009.413-.009.413s1.79 4.222 3.817 6.35c1.858 1.95 3.968 1.822 3.968 1.822z" />
    </Brand>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Brand {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.638-.248 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
      />
    </Brand>
  );
}

export const SOCIAL_ICONS: Record<SocialKind, (p: IconProps) => JSX.Element> = {
  telegram: TelegramIcon,
  tiktok: TikTokIcon,
  vk: VkIcon,
  instagram: InstagramIcon,
};
