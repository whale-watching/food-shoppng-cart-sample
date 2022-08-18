import React from 'react';
import { Link, LinkProps, IconProps } from '@chakra-ui/react';

interface Props extends LinkProps {
  icon: IconProps;
}

const ExternalLink = ({ icon, href, ...rest }: Props) => (
  <Link
    isExternal
    color="brand.black"
    fontFamily="heading"
    fontSize="xl"
    fontWeight={500}
    href={href}
    my={5}
    {...rest}
  >
    {icon}
  </Link>
);

export default ExternalLink;
