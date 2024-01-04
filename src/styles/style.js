import styled from "styled-components";
import { motion } from "framer-motion";

export const ScrollableText = styled(motion.h1)`
  font-family: var(--font-primary);
  color: white;
  font-size: 7em;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
`;