import SearchOrConnect from '@/components/SearchOrConnect/SearchOrConnect';
import { generateMetadata } from '@/utils/generateMetadata';

export const metadata = generateMetadata({
  title: 'Positions',
  description: 'Permission-less access to morpho blue protocol',
  images: 'themes.png',
  pathname: '',
});

export default function LogIn() {
  return <SearchOrConnect path="positions" />;
}
