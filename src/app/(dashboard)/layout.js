import BasicLayout from "@/app/(dashboard)/BasicLayout";

export default function RootLayout({children}) {
    return (
        <BasicLayout>
            {children}
        </BasicLayout>
    )
}
