declare global {
  namespace Types {
    interface Shoes {
      id: number;
      title: string;
      type: "sneakers" | "winter_shoes";
      price: number;
      isFavorite: boolean;
      size: string[];
      img: string[];
    }
    interface Select {
      label: string;
      value: "CH" | "EX" | "LIKE";
    }
  }
}

export {};
