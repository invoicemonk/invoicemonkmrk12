import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface ReviewFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function ReviewForm({ onSuccess, className }: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setErrorMessage('Please select a rating');
      return;
    }
    
    if (!name.trim() || !email.trim() || !reviewText.trim()) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Store review in localStorage for now (can be migrated to Supabase later)
      const review = {
        id: `review_${Date.now()}`,
        rating,
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        role: role.trim() || undefined,
        reviewText: reviewText.trim(),
        createdAt: new Date().toISOString(),
        status: 'pending' // pending, approved, rejected
      };

      // Store in localStorage
      const existingReviews = JSON.parse(localStorage.getItem('invoicemonk_reviews') || '[]');
      existingReviews.push(review);
      localStorage.setItem('invoicemonk_reviews', JSON.stringify(existingReviews));

      // Also send to contact form endpoint as a backup
      await supabase.from('contact_messages').insert({
        first_name: name.split(' ')[0] || name,
        last_name: name.split(' ').slice(1).join(' ') || '',
        email,
        subject: `Review Submission (${rating} stars)`,
        message: `Rating: ${rating}/5\nCompany: ${company || 'N/A'}\nRole: ${role || 'N/A'}\n\nReview:\n${reviewText}`
      });

      setSubmitStatus('success');
      onSuccess?.();
      
      // Reset form
      setTimeout(() => {
        setRating(0);
        setName('');
        setEmail('');
        setCompany('');
        setRole('');
        setReviewText('');
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ratingLabels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  return (
    <Card className={cn("border-border/50", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          Share Your Experience
        </CardTitle>
        <CardDescription>
          Your feedback helps other businesses make informed decisions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-8"
            >
              <CheckCircle className="h-16 w-16 text-wave-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                Your review has been submitted and is pending approval.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Rating */}
              <div className="space-y-2">
                <Label>Overall Rating *</Label>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className={cn(
                            "h-8 w-8 transition-colors",
                            (hoverRating || rating) >= star
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                  {(hoverRating || rating) > 0 && (
                    <span className="text-sm font-medium text-muted-foreground">
                      {ratingLabels[(hoverRating || rating) - 1]}
                    </span>
                  )}
                </div>
              </div>

              {/* Name and Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="review-name">Your Name *</Label>
                  <Input
                    id="review-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review-email">Email *</Label>
                  <Input
                    id="review-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Not displayed publicly
                  </p>
                </div>
              </div>

              {/* Company and Role row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="review-company">Company</Label>
                  <Input
                    id="review-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Inc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review-role">Your Role</Label>
                  <Input
                    id="review-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Freelancer, Business Owner, etc."
                  />
                </div>
              </div>

              {/* Review Text */}
              <div className="space-y-2">
                <Label htmlFor="review-text">Your Review *</Label>
                <Textarea
                  id="review-text"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Tell us about your experience with Invoicemonk. What do you like most? How has it helped your business?"
                  rows={5}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Minimum 50 characters ({reviewText.length}/50)
                </p>
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting || rating === 0 || reviewText.length < 50}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Review
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our review guidelines. Reviews are moderated before publishing.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

export default ReviewForm;
