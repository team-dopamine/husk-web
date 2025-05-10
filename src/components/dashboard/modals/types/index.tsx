export interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  fields: { label: string; placeholder: string }[];
}

export interface SshConnectionReadModalProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
  inputValues: string[];
  onSave: () => void;
  onSuccess?: () => void;
}
