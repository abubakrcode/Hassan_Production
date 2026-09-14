"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div>
      {/* Full Screen Shine / Wipe Screen Overlay */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none bg-linear-to-r from-transparent via-white/30 to-transparent backdrop-blur-md"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}