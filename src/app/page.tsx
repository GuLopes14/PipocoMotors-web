import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar active="" />
      <main className="flex justify-center items-center mb-[40%]">
        <div className="p-11">
          <h2 className="text-lg font-bold" > Home </h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
