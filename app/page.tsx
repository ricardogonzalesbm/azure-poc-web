import Image from "next/image";

const AZURE_STORAGE_BASE_URL = process.env.NEXT_PUBLIC_AZURE_STORAGE_URL;
const IMAGE_FILENAMES = ["photo1.png", "photo2.png"];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Imágenes desde Azure Storage
        </h1>

        {!AZURE_STORAGE_BASE_URL ? (
          <p className="max-w-md text-lg leading-8 text-red-600 dark:text-red-400">
            Falta la variable de entorno NEXT_PUBLIC_AZURE_STORAGE_URL. Revisa
            tu .env.local (local) o Project Settings → Environment Variables
            (Vercel).
          </p>
        ) : (
          <div className="flex flex-wrap gap-6">
            {IMAGE_FILENAMES.map((filename) => (
              <div key={filename} className="overflow-hidden rounded-lg">
                <Image
                  src={`${AZURE_STORAGE_BASE_URL}/${filename}`}
                  alt={filename}
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
