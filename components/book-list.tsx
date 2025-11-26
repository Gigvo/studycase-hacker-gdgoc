"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Book {
  _id: string;
  title: string;
  cover_image: string;
  author: {
    name: string;
  };
  category?: {
    name: string;
  };
}

interface BookListProps {
  query: string;
  onBookClick: (bookId: string) => void;
}

export default function BookList({ query, onBookClick }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!query || query.trim().length < 2) {
        setBooks([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?keyword=${encodeURIComponent(
            query
          )}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();

        const booksData = Array.isArray(data) ? data : data.books || [];
        setBooks(booksData);
      } catch (err) {
        console.error("Error: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [query]);

  if (!query || query.trim().length < 2) {
    return (
      <div className="text-center text-gray-500 py-4">
        <p>Type at least 2 characters to search</p>
      </div>
    );
  }

  if (loading) {
    <div className="text-center text-black py-4">
      <p>Loading...</p>
    </div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-4">
        <p>{error}</p>
      </div>
    );
  }
  if (books.length == 0) {
    <div className="text-black text-center py-4">
      <p>No Books found</p>
    </div>;
  }
  return (
    <div>
      {books.map((book) => (
        <button
          key={book._id}
          onClick={() => onBookClick(book._id)}
          className="w-full flex gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors text-left"
        >
          <div className="relative w-12 h-16 shrink-0">
            <Image
              src={book.cover_image}
              alt={book.title}
              fill
              className="object-cover rounded"
              sizes="48px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm line-clamp-2">{book.title}</h3>
            <p className="text-xs text-gray-600">{book.author.name}</p>
            {book.category && (
              <p className="text-xs text-gray-500">{book.category.name}</p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
