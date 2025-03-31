export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fields: { label: string; placeholder: string; type: string }[];
  id?: number;
  onSuccess?: () => void;
}

export interface KeychainResponse {
  content: string;
}
