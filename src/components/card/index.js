import React from "react";

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
        <Link to="#/">
          <Image
            src="https://i.picsum.photos/id/159/200/200.jpg?hmac=yMGKiL5NWrcdgRoltkx_OXTy3PFWYkM6T-cWFmXQULE"
            alt="product"
          ></Image>
          <Box p="6">
            <Box mt="1" fontWeight="semibold" lineHeight="tight">
              {item.title}
            </Box>
            <Box mt="1" fontWeight="semibold" lineHeight="tight"></Box>
            <Box>{item.price}</Box>
          </Box>
        </Link>
        <Button>Detail</Button>
      </Box>
    </div>
  );
};

export default Card;
