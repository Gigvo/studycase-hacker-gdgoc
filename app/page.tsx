import Image from "next/image";
import Navbar from "../components/navbar";
import PageNav from "@/components/page-navigation";
import BookDetails from "@/components/book-details";
import ReadingList from "@/components/your-reading-list";
import BooksForYou from "@/components/books-for-you";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <PageNav />
      <BookDetails />
      <ReadingList />
      <BooksForYou />
    </div>
  );
}
