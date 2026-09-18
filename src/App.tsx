import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { StoreProvider } from "./store";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar, SearchOverlay } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { ProductModal } from "./components/ProductModal";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { CollectionsPage } from "./pages/CollectionsPage";
import { StoryPage } from "./pages/StoryPage";
import { IngredientsPage } from "./pages/IngredientsPage";
import { JournalPage } from "./pages/JournalPage";
import { ContactPage } from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </motion.main>
      </AnimatePresence>
      <PageMask pathname={location.pathname} />
      <CartDrawer />
      <ProductModal />
      <SearchOverlay />
    </>
  );
}

function PageMask({ pathname }: { pathname: string }) {
  const first = pathname === "/" && typeof window !== "undefined";
  return (
    <motion.div
      key={pathname}
      className="pointer-events-none fixed inset-0 z-[90] bg-[#faf8f5]"
      initial={{ scaleY: first ? 0 : 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: "top" }}
    />
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <StoreProvider>
      <CustomCursor />
      <AnimatePresence>
        {!ready && <Loader key="loader" onDone={() => setReady(true)} />}
      </AnimatePresence>
      {ready && (
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      )}
    </StoreProvider>
  );
}
