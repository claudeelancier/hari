import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="display display--page">
          This page
          <br />
          does not exist.
        </h1>
        <p className="lede">The URL may have moved with the new site architecture.</p>
        <Link href="/" className="btn btn--primary">
          <span className="btn__inner">Back home</span>
        </Link>
      </div>
    </section>
  );
}
