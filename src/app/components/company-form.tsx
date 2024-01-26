'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import InputField from './input-field';
import LogoUploader from './logo-uploader';
import Button from './button';
import StatusLabel from './status-label';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import {
//   CompanyStatus,
//   createCompany,
//   getCategories,
//   getCountries,
// } from '@/lib/api';

export type CompanyFieldValues = {
  title: string;
  description: string;
  status: string;
  joinedDate: string;
  categoryId: string;
  countryId: string;
};

const initialValues: CompanyFieldValues = {
  title: '',
  description: '',
  status: '',
  joinedDate: '',
  categoryId: '',
  countryId: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
 
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField
              label="Status"
              placeholder="Status"
              name="status"
              as="select"
            />
            <InputField
              label="Country"
              placeholder="Country"
              name="countryId"
              as="select"
            />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField required label="Name" placeholder="Name" name="title" />
            <InputField
              label="Category"
              placeholder="Category"
              name="categoryId"
              as="select"
            />
            <InputField
              label="Joined date"
              type="date"
              name="joinedDate"
            />
            <InputField
              required
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">
          Add company
        </Button>
      </Form>
    </Formik>
  );
}