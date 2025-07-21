export interface cardProps{
	  title: string;
  description: string;
  imageUrl: string;
  link: string;
  altText?: string;
  onClick?: () => void;
}