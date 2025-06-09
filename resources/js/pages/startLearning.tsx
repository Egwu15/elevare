import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TextArea } from '@/components/ui/text-area';
import Layout from '@/layouts/layout-light';
import { Head, useForm } from '@inertiajs/react';
import { SelectPortal } from '@radix-ui/react-select';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';

export default function StartLearning() {
    const { data, setData, post, errors, reset, processing } = useForm({
        email: '',
        first_name: '',
        last_name: '',
        course: '',
        note: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('submit-contact-form'), {
            onSuccess: () => {
                reset();
                toast('Thanks for your submission!');
            },
            onError: () => {
                toast.error('Form not submitted!');
            },
        });
    };

    return (
        <Layout>
            <Head title="Start Learning" />
            <section className="mx-auto my-16 max-w-7xl justify-between px-5 md:my-36 md:mt-28 md:flex md:px-0">
                <div className="mb-6 w-full md:mb-0">
                    <h3 className="text-3xl md:text-6xl">
                        Empower your <br /> future with Elevare
                    </h3>
                    <p className="mt-6 max-w-md text-xl">
                        Explore industry-aligned programs designed to elevate your career and transform your potential into real-world success.
                    </p>
                </div>

                <form onSubmit={(e) => submit(e)} className="w-full rounded-sm bg-[#F9FAFA] p-6">
                    <h3 className="mb-1 text-xl">Fill out this form and choose your program of interest to get started!</h3>
                    <div className="mt-10">
                        <p className="text-xl">Email address</p>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="mt-4 md:flex">
                        <div className="mt-4 mr-0 w-full md:mt-0 md:mr-2">
                            <p className="mb-1 text-xl">First name</p>
                            <Input
                                id="first_name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={2}
                                autoComplete="family-name"
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                placeholder="John"
                            />
                            <InputError message={errors.email} />
                        </div>
                        <div className="mt-4 ml-0 w-full md:mt-0 md:ml-2">
                            <p className="mb-1 text-xl">Last name</p>
                            <Input
                                id="last_name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={3}
                                autoComplete="name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                placeholder="John"
                            />
                            <InputError message={errors.last_name} />
                        </div>
                    </div>
                    <div className="mt-4 w-full">
                        <p className="mb-1.5 text-xl">Course of Interest</p>
                        <Select onValueChange={(value) => setData('course', value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Please Select…"></SelectValue>
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Product Management">Product Management</SelectItem>
                                        <SelectItem value="Leadership & Strategy">Leadership & Strategy</SelectItem>
                                        <SelectItem value="Data & Technology">Data & Technology</SelectItem>
                                        <SelectItem value="Design Thinking & Innovation">Design Thinking & Innovation</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </div>
                    <div className="mt-4 w-full">
                        <p className="mb-1.5 text-xl">Course of Interest</p>
                        <TextArea
                            id="note"
                            required
                            autoFocus
                            tabIndex={5}
                            autoComplete="name"
                            value={data.note}
                            onChange={(e) => setData('note', e.target.value)}
                            placeholder="John"
                        />
                    </div>

                    <Button className="mt-10 w-full bg-green-500 px-8 hover:bg-green-400" disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Register Interest
                    </Button>
                </form>
            </section>
        </Layout>
    );
}
