export interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  fields: { label: string; placeholder: string; type?: string }[];
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
  onSuccess?: () => void;
}
