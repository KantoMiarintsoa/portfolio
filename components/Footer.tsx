export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>
          © {currentYear} Kanto Sarobidy Ratolojanahary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
