import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  useEffect(() => {
    if (open) {
      const script = document.createElement('script');
      script.src = 'https://link.growthguild.us/js/form_embed.js';
      script.type = 'text/javascript';
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full p-0 overflow-hidden max-h-[90vh]">
        <DialogTitle className="sr-only">Plan Your System</DialogTitle>
        <iframe
          src="https://link.growthguild.us/widget/booking/IdfIZG94XipOO5IrWSo0"
          style={{ width: '100%', height: '80vh', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id="IdfIZG94XipOO5IrWSo0_1772042942615"
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
