import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

interface PortalCardProps {
  title: string
  href: string
  imageUrl: string
}

export function PortalCard({ title, href, imageUrl }: PortalCardProps) {
  return (
    <Link href={href}>
      <Card className="group relative overflow-hidden transition-shadow hover:shadow-lg">
        <CardContent className="p-0">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={200}
            className="aspect-[2/1] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60">
            <div className="flex h-full items-center justify-center p-4">
              <h2 className="text-center text-lg font-semibold text-white">
                {title}
              </h2>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

