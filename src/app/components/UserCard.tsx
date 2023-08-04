import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined


export default function Card({user, pagetype}: {user: User, pagetype: string}) {
    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            Hello {user?.name}!
        </div>
    ) : null

    // const emailDisplay = user?.email ? (
    //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
    //         {user?.email}
    //     </div>
    // ) : null

    const userImage = user?.image ? (
        <Image
            src={user?.image}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section>
            {greeting}
            {/* {emailDisplay} */}
            {userImage}
            <p>{pagetype} Page!</p>
        </section>
    )
}