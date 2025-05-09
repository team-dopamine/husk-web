export interface ModalProps {
  isOpen: boolean;
  currentPage: string;
  onClose: () => void;
  fields: { label: string; placeholder: string }[];
}
