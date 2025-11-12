import { Metadata } from "next";

const publishedTime = "2025-01-01T00:00:00Z";
const modifiedTime = "2025-11-12T00:00:00Z";

export const metadata: Metadata = {
  title: "Beyond Background Checks: Find What Standard Checks Miss",
  description:
    "Standard background checks only catch criminals who got caught. We reveal hidden identities, dark web activity, and red flags lurking beneath the surface.",
  keywords: [
    "background check intelligence",
    "deep background investigation",
    "hidden identity detection",
    "dark web screening",
    "beyond criminal records",
    "executive vetting",
    "pre-employment screening",
    "hiring risk assessment",
  ],
  alternates: {
    canonical: "https://quantumleapai.abacusai.app/background-checks",
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
  },
  other: {
    "article:published_time": publishedTime,
    "article:modified_time": modifiedTime,
  },
  openGraph: {
    type: "article",
    url: "https://quantumleapai.abacusai.app/background-checks",
    title: "Beyond Background Checks: Find What Standard Checks Miss",
    description:
      "Standard background checks only catch criminals who got caught. We reveal hidden identities, dark web activity, and red flags lurking beneath the surface.",
    publishedTime,
    modifiedTime,
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Background Checks: Find What Standard Checks Miss",
    description:
      "Standard background checks only catch criminals who got caught. We reveal hidden identities, dark web activity, and red flags lurking beneath the surface.",
  },
};

export default function BackgroundChecksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
