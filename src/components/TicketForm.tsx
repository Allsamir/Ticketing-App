"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Ticket from "@/interface/TicketInterface";
type Props = {
  updateTicketData: Ticket;
};

const TicketForm = ({ updateTicketData }: Props) => {
  const EDITMODE = updateTicketData._id !== "new";
  const router = useRouter();
  const startingData: Ticket = updateTicketData;
  if (EDITMODE) {
    startingData.title = updateTicketData.title;
    startingData.description = updateTicketData.description;
    startingData.priority = updateTicketData.priority;
    startingData.status = updateTicketData?.status;
    startingData.progress = updateTicketData?.progress;
    startingData.category = updateTicketData?.category;
  }
  const [formData, setFormData] = useState(startingData);
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (EDITMODE) {
        await axios
          .put(`/api/tickets/${updateTicketData._id}`, {
            formData: {
              title: formData.title,
              description: formData.description,
              priority: formData.priority,
              status: formData.status,
              active: formData.active,
              category: formData.category,
              progress: formData.progress,
            },
          })
          .then((res) => {
            if (res.statusText !== "OK") {
              throw new Error("Failed to update tickets");
            }
            if (res.data) router.push("/");
          });
      } else {
        await axios
          .post(`/api/tickets`, {
            formData: {
              title: formData.title,
              description: formData.description,
              priority: formData.priority,
              status: formData.status,
              active: formData.active,
              category: formData.category,
              progress: formData.progress,
            },
          })
          .then((res) => {
            if (res.statusText !== "Created") {
              throw new Error("Failed to create tickets");
            }
            console.log(res);
            router.push("/");
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center w-full lg:w-1/2 md:w-4/5 mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
          <h3>{EDITMODE ? "Update" : "Create"} Your Ticket</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              className="input input-bordered"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              rows={8}
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              onChange={handleChange}
              name="category"
              value={formData.category}
              className="select select-bordered w-full max-w-xs"
            >
              <option defaultValue={`any problem`}>Choose a category</option>
              <option value={`hardware problem`}>Hardware Problem</option>
              <option value={`software problem`}>Software Problem</option>
              <option value={`any problem`}>Any Problem</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="">1</label>
              <input
                type="radio"
                name="priority"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="">2</label>
              <input
                type="radio"
                name="priority"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="">3</label>
              <input
                type="radio"
                name="priority"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="">4</label>
              <input
                type="radio"
                name="priority"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="">5</label>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Progress</span>
            </label>
            <input
              max="100"
              type="range"
              min="0"
              value={formData.progress}
              name="progress"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <select
              onChange={handleChange}
              name="status"
              value={formData.status}
              className="select select-bordered w-full max-w-xs"
            >
              <option defaultValue={`not started`}>Choose your status</option>
              <option value={`not started`}>Not Started</option>
              <option value={`started`}>Started</option>
              <option value={`done`}>Done</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary btn-custom">
              {EDITMODE ? "Update" : "Create"} Ticket
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TicketForm;
