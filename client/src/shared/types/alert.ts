export type Alert = {
  _id: string;
  severity: 'error';
  message: string;
  timeout: number;
  onDismiss: (_id: string) => void;
};

export type AlertAdd = Pick<Alert, 'message' | 'severity' | 'timeout'>;
