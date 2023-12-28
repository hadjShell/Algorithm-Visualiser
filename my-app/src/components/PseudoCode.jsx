export default function PseudoCode({ pseudoCode, step }) {
  return (
    <section className="px-16 pt-10 flex flex-row justify-end">
      <div className="p-4 font-['Courier_Prime'] text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
        {pseudoCode.map((e, i) =>
          step === i ? (
            <p
              key={i}
              className="py-0.5 whitespace-pre-wrap text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            >
              {e}
            </p>
          ) : (
            <p key={i} className="py-0.5 whitespace-pre-wrap">
              {e}
            </p>
          )
        )}
      </div>
    </section>
  );
}
