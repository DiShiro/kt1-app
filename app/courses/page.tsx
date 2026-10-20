import Link from "next/link";

export default function CoursesPage() {
  return (
    <div>
      <h1>Курсы</h1>
      <ul>
        <li><Link href="/courses/nextjs">Next.js</Link></li>
        <li><Link href="/courses/react">React</Link></li>
      </ul>
    </div>
  );
}
