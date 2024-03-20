export interface TransBoxProps {
  leftData: TransItem[];
  rightData: TransItem[];
  selectedLeftItems: TransItem[];
  selectedRightItems: TransItem[];
}

export interface TransItem {
  label: string;
  id: number | string;
}

export interface TransferEmits {
  (e: 'select-transfer', value: TransItem[]): void;
  (e: 'drop-transfer', value: TransItem): void;
}