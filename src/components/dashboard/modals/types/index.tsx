export interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  fields: { label: string; placeholder: string }[];
}

export interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SshConnectionReadModalProps {
  id: number;
  isOpen: boolean;
  fields: { label: string; placeholder: string }[];
  onClose: () => void;
  inputValues: string[];
  onSave: () => void;
  onSuccess?: () => void;
}
