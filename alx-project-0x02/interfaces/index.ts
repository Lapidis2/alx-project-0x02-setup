export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
  }
  
  export interface UserProps {
	id: number;
	name: string;
	email: string;
	address: Address;
  }