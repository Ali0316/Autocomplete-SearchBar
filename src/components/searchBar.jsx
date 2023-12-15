import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useClickOutside } from "react-click-outside-hook";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled(motion.div)`
  width: 24em;
  height: 3em;
  display: flex;
  justify-content: space-between;
  border: 1px solid #bebebe;
  align-items: center;
  flex-direction: row;
`;

const SearchContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 2em;
  background-color: #bebebe;
`;

const SearchBarInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 2em;
  height: 100%;
  padding-left: 2em;
  font-size: 1.2em;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;

const CancelButton = styled(motion.div)`
  color: #1b1b1b;
  background-color: #bebebe;
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6em 0.9em;
  margin-right: 0.5em;
  cursor: pointer;
`;

const containerVariants = {
  focused: {
    width: "18em",
  },
  collapsed: {
    width: "24em",
  },
};

const containerTransition = { type: "spring", damping: 18, stiffness: 150 };

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();

  useEffect(() => {
    if (isClickedOutside) {
      setIsFocused(false);
    }
  }, [isClickedOutside]);

  return (
    <Container>
      <SearchBarContainer>
        <SearchContainer
          animate={isFocused ? "focused" : "collapsed"}
          variants={containerVariants}
          transition={containerTransition}
        >
          <SearchBarInput
            placeholder="Search..."
            onFocus={() => setIsFocused(true)}
            ref={parentRef}
          />
        </SearchContainer>

        {/* <AnimatePresence> */}
        {isFocused && (
          <CancelButton
            key="close-icon"
            initial={{ display: "none", opacity: 0 }}
            animate={{ display: "flex", opacity: 1 }}
            exit={{ display: "none", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Cancel
          </CancelButton>
        )}
        {/* </AnimatePresence> */}
      </SearchBarContainer>
    </Container>
  );
}

export default SearchBar;