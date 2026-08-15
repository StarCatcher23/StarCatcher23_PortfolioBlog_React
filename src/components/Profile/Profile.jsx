import "./Profile.css";
import { useState, useEffect, useMemo } from "react";
import useFormWithValidation from "../hooks/useFormWithValidation";
import Sidebar from "../Sidebar/Sidebar";

export default function Profile({ user, onUpdateUser, onSignOut, isLoading }) {
  const [isEditing, setIsEditing] = useState(false);

  const defaultValues = useMemo(
    () => ({
      name: user.name,
      avatar: user.avatar,
      email: user.email,
    }),
    [user.name, user.avatar, user.email],
  );

  const { values, handleChange, errors, resetForm, isValid } =
    useFormWithValidation(defaultValues);

  useEffect(() => {
    resetForm(defaultValues, {}, true);
  }, [defaultValues, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
    setIsEditing(false);
  };

  return (
    <section className="profile">
      <h2 className="profile__title">Profile</h2>

      <form className="profile__form" onSubmit={handleSubmit}>
        <Sidebar
          onEditProfile={() => setIsEditing(true)}
          onSignOut={onSignOut}
        />

        {isEditing && (
          <div className="profile__fields">
            <label className="profile__label">
              Name
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="profile__input"
                required
              />
              <span className="profile__error">{errors.name}</span>
            </label>

            <label className="profile__label">
              Avatar URL
              <input
                type="url"
                name="avatar"
                value={values.avatar}
                onChange={handleChange}
                className="profile__input"
                required
              />
              <span className="profile__error">{errors.avatar}</span>
            </label>

            <label className="profile__label">
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="profile__input"
                required
              />
              <span className="profile__error">{errors.email}</span>
            </label>

            <button
              type="submit"
              className="profile__save-btn"
              disabled={!isValid || isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
