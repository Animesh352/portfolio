import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For static site, open email client
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:animesh.giri2000@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message.",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Interested in working together? Let's connect!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:animesh.giri2000@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span>animesh.giri2000@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/animesh-giri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-blue-500" />
                    <span>linkedin.com/in/animesh-giri</span>
                  </a>
                  <a
                    href="https://github.com/Animesh352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5 text-blue-500" />
                    <span>github.com/Animesh352</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Looking for</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data Scientist roles</li>
                  <li>• AI Engineer positions</li>
                  <li>• ML Engineer opportunities</li>
                  <li>• Healthcare AI projects</li>
                  <li>• Consulting & collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
