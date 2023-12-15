import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useClickOutside } from "react-click-outside-hook";
import { IoIosClose } from "react-icons/io";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  height: 2.5em;
  display: flex;
  /* justify-content: space-between; */
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
  font-size: 0.9em;

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
  margin-left: 0.3em;
  cursor: pointer;
  font-size: 1.7em;
`;

const containerVariants = {
  focused: {
    width: "12em",
  },
  collapsed: {
    width: "14em",
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
      <SearchBarContainer
      >
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
            <IoIosClose/>
          </CancelButton>
        )}
        {/* </AnimatePresence> */}
      </SearchBarContainer>
    </Container>
  );
}

export default SearchBar;
