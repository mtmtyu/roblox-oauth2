export default function SiteFooter() {
  return (
    <footer className="flex justify-center items-center text-gray-500 dark:text-gray-400 py-14">
      <p>
        <a href="https://github.com/PiratePeep" className="font-medium text-purple-400 dark:text-violet-500">
          PiratePeep
        </a>
        によって作成されました。{" "}
        <span role="img" aria-label="love">
          ☕
        </span>{" "}
        <a href="https://github.com/mtmtyu" className="font-medium text-purple-400 dark:text-violet-500">
          mtmtyu
        </a>
        によって編集・翻訳されました。
      </p>
    </footer>
  );
}
