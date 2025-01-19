"use client";

export default function MyError({ error }: { error: unknown }) {
    console.log(error);
    return (
        <div>
            <h2>Something went wrong!</h2>
        </div>
    );
}
