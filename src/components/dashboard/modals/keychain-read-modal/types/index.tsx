export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fields: { label: string; placeholder: string }[];
  id?: number;
  onSuccess?: () => void;
}
