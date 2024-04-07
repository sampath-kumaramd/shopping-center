"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Props = {
    title_1?: string
    href_1?: string
    title_2?: string
    href_2?: string
    title_3?: string
    href_3?: string
}

export function Custombreadcrumb({ title_1, title_2, title_3, href_1, href_2, href_3 }: Props) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/"><span className=" text-blue-500">Promoções</span></BreadcrumbLink>
                </BreadcrumbItem>
                {title_1 && href_1 && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={href_1}>{title_1}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}
                {title_2 && href_2 && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={href_2}>{title_2}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}
                {title_3 && href_3 && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={href_3}>{title_3}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>

    )
}
