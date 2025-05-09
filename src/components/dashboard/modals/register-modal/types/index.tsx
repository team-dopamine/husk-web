export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  fields: { label: string; placeholder: string }[];
}
